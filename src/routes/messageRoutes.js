const {Router} = require("express")
const messageService = require('../services/messageService')
const messageRouter = Router();

messageRouter.post("/", messageService.addMessage);

messageRouter.get("/:conversationId", messageService.getMessages);

module.exports = messageRouter;