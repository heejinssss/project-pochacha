package com.ssafy.oho.controller;

import com.ssafy.oho.model.dto.request.PlayerRequestDto;
import com.ssafy.oho.model.dto.request.RoomRequestDto;
import com.ssafy.oho.model.dto.response.CellResponseDto;
import com.ssafy.oho.model.entity.Cell;
import com.ssafy.oho.model.entity.Room;
import com.ssafy.oho.model.service.GameService;
import com.ssafy.oho.util.exception.GameGetException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("game")
@CrossOrigin
public class GameController {
    private GameService gameService;
    private SimpMessagingTemplate webSocket;

    @Autowired
    private GameController(SimpMessagingTemplate webSocket, GameService gameService) {
        this.webSocket = webSocket;
        this.gameService = gameService;
    }

    @PostMapping("start")
    private ResponseEntity<?> startGame(@RequestBody RoomRequestDto roomRequestDto) {
        try {
            Object[] cellStatusList = gameService.startGame(roomRequestDto);

            return ResponseEntity.ok(cellStatusList);
        } catch(GameGetException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // 말 이동 Socket 함수
    @MessageMapping("move/{roomId}")
    public void movePin(@Payload Map<String, Object> payload, @DestinationVariable String roomId) {

        Map<String, Object> responsePayload = gameService.movePin(payload, roomId);
        responsePayload.put("cell", gameService.getCell(roomId, (int) responsePayload.get("pin") - 1));

        webSocket.convertAndSend("/topic/move/" + roomId, responsePayload);
    }
}
