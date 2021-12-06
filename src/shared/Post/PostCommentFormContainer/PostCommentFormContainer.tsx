import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../../store/rootReducer";
import {PostCommentForm} from "../PostCommentForm";

export function PostCommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  function handleSubmit(e: {comment: string}) {
    console.log(e);
    alert('React Submit');
  }

  return (<PostCommentForm
    value={value}
    onChange={handleChange}
    onSubmit={handleSubmit}
  />);
}
