package com.ssafy.oho.model.dto.response;

import com.ssafy.oho.model.entity.Penalty;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class PlayerResponseDto {
    private long id;
    private String nickname;
    private String roomId;
    private boolean head;
    private boolean ready;
    /* 혜지 : score 삭제 */
    //private int score;
    private Penalty penalty;
    private String ipAddress;
}
