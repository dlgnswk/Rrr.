import HomepageTitle from "@/components/homepage/HomepageTitle";
import PostpageLayout from "@/components/posts/PostpageLayout";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

import { posts } from "@/constants/posts";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PageProps) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PostpageLayout>
      <HomepageTitle />
      <article className="flex flex-col w-full gap-3">
        <div className="flex flex-col">
          <h1 className="text-5xl break-keep">
            <span className="font-bold">{post.titleStyle.bold}</span>
            {post.titleStyle.rest}
          </h1>
          <Separator className="my-6 bg-black" />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="/rrr.png" alt="rrr" className="w-10 h-10" />
              <span className="font-honerThose text-xl pt-2">Reeraeroon</span>
            </div>
            <div className="flex flex-col gap-1 ml-auto text-xs text-right">
              <span className="font-honerThose">2024.11.23 SAT</span>
              <p className="flex gap-1">
                <span>Frontend |</span>
                <span>React Query, TypeScript | </span>
                <span>1000 likes</span>
              </p>
            </div>
          </div>
          <Separator className="my-6 bg-black" />
        </div>

        <div className="prose prose-slate prose-h1:text-4xl prose-h2:text-3xl max-w-none">
          <h1>1. React Query란?</h1>
          <p>
            React Query는 서버 상태 관리를 위한 강력한 라이브러리입니다. V5
            버전에서는 더욱 개선된 성능과 새로운 기능들이 추가되었습니다.
          </p>
          <br />
          <h2>주요 특징</h2>
          <ul>
            <li>자동 캐싱 및 백그라운드 업데이트</li>
            <li>데이터 동기화 및 실시간 업데이트</li>
            <li>오류 처리 및 재시도 메커니즘</li>
            <li>무한 스크롤 및 페이지네이션 지원</li>
            <li>TypeScript 지원 강화</li>
          </ul>
          <br />
          <h1>2. 기본 설정</h1>
          <p>
            React Query를 사용하기 위해서는 먼저 QueryClientProvider를 설정해야
            합니다. 이때 defaultOptions를 통해 전역 설정을 구성할 수 있습니다.
            staleTime, gcTime, retry 등의 옵션을 설정하여 애플리케이션의 동작을
            제어할 수 있습니다.
          </p>
          <br />
          <h1>3. 기본적인 쿼리 사용법</h1>
          <p>
            useQuery 훅을 사용하여 데이터를 조회할 수 있습니다. queryKey와
            queryFn을 필수로 지정해야 하며, 로딩 상태와 에러 처리도 간단히 할 수
            있습니다. 서버로부터 받아온 데이터는 자동으로 캐시되어 관리됩니다.
          </p>
          <br />
          <h1>4. 데이터 변경하기 (Mutations)</h1>
          <p>
            useMutation 훅을 사용하면 서버의 데이터를 변경할 수 있습니다. 성공
            시 onSuccess 콜백을 통해 캐시를 업데이트하거나 다른 작업을 수행할 수
            있습니다. queryClient.invalidateQueries를 사용하여 관련된 쿼리들을
            무효화하고 새로고침할 수 있습니다.
          </p>
          <br />
          <h1>5. 고급 기능 활용</h1>
          <h2>5.1 무한 스크롤</h2>
          <p>
            useInfiniteQuery를 사용하면 무한 스크롤을 쉽게 구현할 수 있습니다.
            pageParam과 getNextPageParam을 통해 페이지네이션을 관리하며, 사용자
            경험을 향상시킬 수 있습니다.
          </p>
          <br />
          <h2>5.2 낙관적 업데이트</h2>
          <p>
            mutation의 onMutate 콜백을 활용하여 서버 응답 전에 UI를 먼저
            업데이트할 수 있습니다. 실패 시 이전 상태로 롤백하는 것도 가능합다.
          </p>
          <br />
          <h1>6. 성능 최적화 팁</h1>
          <h2>6.1 적절한 staleTime 설정</h2>
          <p>
            staleTime은 데이터가 "신선"하다고 간주되는 시간입니다 너무 짧으면
            불필요한 리페치가 발생합니다 너무 길면 데이터가 오래된 상태로
            유지됩니다 데이터의 성격에 따라 적절한 값을 설정해야 합니다
          </p>
          <br />
          <h2>6.2 선택적 데이터 구조화</h2>
          <p>
            select 옵션을 사용하여 필요한 데이터만 선택적으로 가져올 수
            있습니다. 이를 통해 메모리 사용량을 줄이고 렌더링 성능을 개선할 수
            있습니다.
          </p>
          <br />
          <h1>7. 에러 처리</h1>
          <p>
            React Query는 강력한 에러 처리 메커니즘을 제공합니다. retry 옵션으로
            재시도 횟수를, retryDelay로 재시도 간격을 설정할 수 있습니다.
            onError 콜백을 통해 에러 발생 시의 처리 로직을 구현할 수 있습니다.
          </p>
          <br />
          <p>
            마치며 React Query V5는 프론트엔드 애플리케이션의 서버 상태 관리를
            크게 단순화합니. 캐싱, 동기화, 에러 처리 등 복잡한 상태 관리 로직을
            쉽게 구현할 수 있으며, 이는 곧 개발 생산성과 애플리케이션 성능
            향상으로 이어집니다. 이러한 기능들을 적절히 활용하면 사용자 경험이
            뛰어난 웹 애플리케이션을 구축할 수 있습니다. React Query V5는
            계속해서 발전하고 있으며, 프론트엔드 개발자들에게 필수적인 도구로
            자리잡고 있습니다.
          </p>
        </div>
      </article>
    </PostpageLayout>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `Post - ${params.slug}`,
  };
}
