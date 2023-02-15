import React from "react";
import clsx from "clsx";
import { Card } from "./Card";
import { Votes } from "./Votes";
import Post from "../types/post";

type PostCardProperties = {
	post: Post;
};

export function PostCard({ post }: PostCardProperties) {
	return (
		<Card className="w-full max-w-xl flex flex-row">
			<Votes votes={0} />
			<div>
				<h1>{post.id}</h1>
			</div>
		</Card>
	);
}
