all: posts

posts: $(shell find -d1 ./posts)

out/posts/time-to-give-back.html: posts/time-to-give-back
	./scripts/make-post.sh time-to-give-back
