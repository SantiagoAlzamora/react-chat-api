const Conversation = require('../models/Conversation')

exports.addConversation = async function addConversation(req, res) {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.getUserConversations = async function getUserConversations(req, res) {
  try {

    const conversations = await Conversation.find({
      members: { $in: [req.params.userId] },
    }).populate({
      path: 'members',
      model:'User'
    })
    res.status(200).json(conversations);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCoversationOfTwoUsers = async function getCoversationOfTwoUsers(req, res) {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    }).populate({
      path: 'members',
      model:'User'
    });
    res.status(200).json(conversation)
  } catch (err) {
    res.status(500).json(err);
  }
}
