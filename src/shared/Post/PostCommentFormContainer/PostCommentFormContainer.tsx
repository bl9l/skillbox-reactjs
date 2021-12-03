import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../../store/rootReducer";
import {PostCommentForm} from "../PostCommentForm";

export function PostCommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(value);
  }

  return (<PostCommentForm
    value={value}
    onChange={handleChange}
    onSubmit={handleSubmit}
  />);
}
