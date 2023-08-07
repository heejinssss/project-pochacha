package com.ssafy.oho.controller;

import com.ssafy.oho.model.dto.request.PlayerRequestDto;
import com.ssafy.oho.model.dto.response.PlayerResponseDto;
import com.ssafy.oho.model.service.PlayerService;
import com.ssafy.oho.model.service.RoomService;
import com.ssafy.oho.util.exception.PlayerDeleteException;
import com.ssafy.oho.util.exception.PlayerGetException;
import com.ssafy.oho.util.exception.PlayerSetException;
import com.ssafy.oho.util.exception.PlayerUpdateException;
import com.ssafy.oho.util.openvidu.OpenViduConfig;
import io.openvidu.java.client.OpenVidu;
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
@RequestMapping("/player")
@CrossOrigin
public class PlayerController {

    /* 혜지 : OpenViduController RoomController 통합 작업 */

    private final SimpMessagingTemplate webSocket;

    private final PlayerService playerService;
    private final RoomService roomService;
    private final OpenVidu openVidu;

    @Autowired
    private PlayerController(SimpMessagingTemplate webSocket, PlayerService playerService, RoomService roomService, OpenVidu openVidu) {
        this.webSocket = webSocket;
        this.playerService = playerService;
        this.roomService = roomService;
        this.openVidu=openVidu;
    }

    /**
     * @param playerRequestDto
     * @return playerResponseDto
     */
    @PostMapping(value="create")
    private ResponseEntity<?> setPlayer(@RequestBody PlayerRequestDto playerRequestDto) {
        System.out.println("SET PLAYER API CALL");
        try {
            PlayerResponseDto playerResponseDto;
            if(playerRequestDto.isHead()) {  // 방장일 경우
                playerResponseDto = playerService.setHead(playerRequestDto, playerRequestDto.getRoomId(), openVidu);
            } else {  // 플레이어일 경우
                playerResponseDto = playerService.setPlayer(playerRequestDto, playerRequestDto.getRoomId(), openVidu);
            }

            return ResponseEntity.ok(playerResponseDto);
        } catch (PlayerSetException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    private ResponseEntity<?> getPlayer(@RequestBody PlayerRequestDto playerRequestDto) {
        try {
            PlayerResponseDto playerResponseDto = playerService.getPlayer(playerRequestDto);

            return ResponseEntity.ok(playerResponseDto);
        } catch(PlayerGetException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("{roomId}")
    private ResponseEntity<?> getPlayersByRoomId(@RequestBody PlayerRequestDto playerRequestDto, @PathVariable String roomId) {
        try {
            List<PlayerResponseDto> playerResponseDto = playerService.getPlayersByRoomId(playerRequestDto, roomId);

            return ResponseEntity.ok(playerResponseDto);
        } catch(PlayerGetException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
