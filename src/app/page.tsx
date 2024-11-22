import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-start">
      <h1 className="text-title font-honerThose">Rrr.</h1>
      <main className="w-full h-full">
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-5xl">
            <span className="font-bold">리액트 쿼리</span>를 도입해 API
            최적화하기
          </h1>
          <p className="font-light">
            React Query V5를 사용하면서 배운 점들을 정리해보았다.
          </p>
        </div>
        <Separator className="my-8 bg-black" />
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-5xl">
            <span className="font-bold">리액트 쿼리</span>를 도입해 API
            최적화하기
          </h1>
          <p className="font-light">
            React Query V5를 사용하면서 배운 점들을 정리해보았다.
          </p>
        </div>
        <Separator className="my-8 bg-black" />
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-5xl">
            <span className="font-bold">리액트 쿼리</span>를 도입해 API
            최적화하기
          </h1>
          <p className="font-light">
            React Query V5를 사용하면서 배운 점들을 정리해보았다.
          </p>
        </div>
        <Separator className="my-8 bg-black" />
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-5xl">
            <span className="font-bold">리액트 쿼리</span>를 도입해 API
            최적화하기
          </h1>
          <p className="font-light">
            React Query V5를 사용하면서 배운 점들을 정리해보았다.
          </p>
        </div>
      </main>
    </div>
  );
}
