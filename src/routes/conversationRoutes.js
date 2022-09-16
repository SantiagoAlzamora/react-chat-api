const {Router} = require("express")
const conversationService = require('../services/conversationService')
const conversationRouter = Router();

conversationRouter.post("/", conversationService.addConversation);

conversationRouter.get("/:userId", conversationService.getUserConversations);
conversationRouter.get("/:firstUserId/:secondUserId", conversationService.getCoversationOfTwoUsers);

module.exports = conversationRouter;