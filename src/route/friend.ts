import express from 'express';
import * as userController from '../controller/user';
const router = express.Router();

// 친구 목록 & 요청 대기 중인 목록
router.get('/', userController.getFriends);
// 친구 요청 보내기
router.post('/waiting', userController.requestFriend);
// 친구 요청 수락
router.post('/accept', userController.acceptFriend);
// 친구 요청 거절
router.delete('/reject/:friendId', userController.rejectFriend);
// 친구 삭제
router.delete('/:friendId', userController.breakFriend);
export default router;
