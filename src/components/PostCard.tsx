import React from "react";
import clsx from "clsx";
import { Card } from "./Card";
import { Votes } from "./Votes";
import { PostWithContent } from "../types/post";

type PostCardProperties = {
	post: PostWithContent;
};

export function PostCard({ post }: PostCardProperties) {
	return (
		<Card className="w-full max-w-xl flex flex-row">
			<Votes votes={0} />
			<div className="p-5">
				<h1 className="text-xl font-semibold">{post.content.title}</h1>
				<p>{post.content.content}</p>
			</div>
		</Card>
	);
}
