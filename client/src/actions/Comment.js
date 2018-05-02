import {
  ADD_COMMENT_REQUEST,
  FETCH_COMMENTS_REQUEST,
  DELETE_COMMENT_REQUEST,
  UPDATE_COMMENT_REQUEST
} from "constants/ActionTypes"

export const addComment = (comment, userId, taskId) => {
  console.log('addComment')
  return {
    type: ADD_COMMENT_REQUEST,
    comment,
    userId,
    taskId
  }
}

export const fetchComments = (taskId) => {
  return {
    type: FETCH_COMMENTS_REQUEST,
    taskId
  }
}

export const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT_REQUEST,
    commentId
  }
}

export const updateMessage = (commentId, newMessage) => {
  return {
    type: UPDATE_COMMENT_REQUEST,
    commentId,
    newMessage
  }
}