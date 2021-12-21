import React, {ChangeEvent} from 'react';
import {PostCommentForm} from "../PostCommentForm";
import {action, Action, createStore, createTypedHooks} from "easy-peasy";


type Comment = string;

interface StoreModel {
  comment: Comment;
  setComment: Action<CommentModel, Comment>
}

interface CommentModel {
  comment: Comment,
}

export const store = createStore<StoreModel>({
  comment: '',
  setComment: action((state, payload) => {
    state.comment = payload;
  })
});

const commentHooks = createTypedHooks<StoreModel>();
const useStoreState = commentHooks.useStoreState;
const useStoreDispatch = commentHooks.useStoreDispatch;

export function PostCommentFormContainer() {
  const value = useStoreState(state => state.comment);
  const {setComment} = useStoreDispatch();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  function handleSubmit(e: {comment: string}) {
    console.log(e);
    alert('React Submit');
  }

  return (
    <PostCommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
