import { Post } from "@/entities/post/model/types";
import PostPageLayout from "./PostPageLayout";
import PostPageContent from "@/features/post-page-content/ui/PostPageContent";
import HomePageButton from "@/features/home-page-button/ui/HomePageButton";

export default function PostPage({ post }: { post: Post }) {
  return (
    <PostPageLayout>
      <HomePageButton />
      <PostPageContent post={post} />
    </PostPageLayout>
  );
}
