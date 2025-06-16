"use client";

import { useChuckNorrisJokeQuery } from "@/app/api/hooks/useChuckNorrisJokeQuery";
import { useDadJokeQuery } from "@/app/api/hooks/useDadJokeQuery";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Skeleton } from "@/ui/skeleton";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function Jokes() {
  const {
    data: chuckNorrisJoke,
    refetch: refetchChuckNorrisJoke,
    isFetching: isChuckNorrisJokeLoading,
    isError: isChuckNorrisJokeError,
  } = useChuckNorrisJokeQuery();
  const {
    data: dadJoke,
    refetch: refetchDadJoke,
    isLoading: isDadJokeLoading,
    isError: isDadJokeError,
  } = useDadJokeQuery();
  const t = useTranslations("Index");
  const [currentJoke, setCurrentJoke] = useState<string | null>(null);

  const handleChuckNorrisJoke = async () => {
    await refetchChuckNorrisJoke();
    setCurrentJoke(chuckNorrisJoke?.value);
  };

  const handleDadJoke = async () => {
    await refetchDadJoke();
    setCurrentJoke(dadJoke?.joke);
  };

  return (
    <>
      <Card className="self-start">
        <CardHeader>
          <div className="flex justify-center gap-4 flex-wrap ">
            <Button onClick={handleChuckNorrisJoke}>
              {t("chuck-norris-joke")}
            </Button>
            <Button onClick={handleDadJoke}>{t("dad-joke")}</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between align-bottom gap-4">
            <span className="text-7xl">“</span>
            {isChuckNorrisJokeLoading || isDadJokeLoading ? (
              <div className="flex flex-col gap-2 w-full">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ) : isChuckNorrisJokeError || isDadJokeError ? (
              <p>Error</p>
            ) : (
              currentJoke && <span>{currentJoke}</span>
            )}
            <span className="text-7xl">”</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
