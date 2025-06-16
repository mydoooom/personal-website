"use client";

import { useCatGifQuery } from "@/app/api/hooks/useCatGifQuery";
import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter } from "@/ui/card";
import { Skeleton } from "@/ui/skeleton";
import { useTranslations } from "next-intl";
import Image from "next/image";
export function Cats() {
  const { data: catGif, refetch, isError, isFetching } = useCatGifQuery();

  const t = useTranslations("Index");

  return (
    <>
      <Card className="py-0 gap-0">
        <CardContent className="p-0 h-92 bg-slate-800 flex justify-center">
          {isFetching ? (
            <Skeleton className="h-full w-full" />
          ) : isError ? (
            <p>Error</p>
          ) : (
            catGif && (
              <Image
                className="h-full w-auto object-contain"
                unoptimized
                src={catGif}
                width={600}
                height={600}
                alt="Cat gif"
              />
            )
          )}
        </CardContent>
        <CardFooter className="bg-main py-6 flex justify-center">
          <Button
            className="bg-secondary dark:text-foreground"
            onClick={() => refetch()}
          >
            {t("next-cat-gif")}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
