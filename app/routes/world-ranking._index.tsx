import CardRankGrind from "~/components/card-rank-grid";
import { LoaderFunction } from "@remix-run/node";
import PagedRanks from "~/interfaces/PagedRanks";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

export const loader: LoaderFunction = async (remixContext) => {
    let apiUrl = "https://4bbf91rzf7.execute-api.us-east-1.amazonaws.com/prod/global_rankings";

    // Get next token
    const url = new URL(remixContext.request.url);
    const nextToken = url.searchParams.get("next_token") || "";
    if (nextToken) {
        apiUrl = apiUrl + `?next_token=${nextToken}`;
    }

    const ranks = await fetch(apiUrl);
    return await ranks.json();
}

export default function WorldRankingIndexRoute() {
    const initialRanks = useLoaderData<PagedRanks | undefined>();
    const [ranks, setRanks] = useState<PagedRanks>(initialRanks);

    const initialLoadMore = !(initialRanks.NextToken && initialRanks.NextToken.length > 0)

    const [loadMore, setLoadMore] = useState(initialLoadMore);
    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.data ) {
            let data = fetcher.data as PagedRanks;
            let combinedItems = [...ranks.Items, ...data.Items]
            setRanks({
                Items: combinedItems,
                NextToken: data.NextToken
            })

            setLoadMore(!(data.NextToken && data.NextToken.length > 0))
        }
    }, [fetcher.data])

    return (
        <div>
            <CardRankGrind
                ranks={ranks.Items} />
            <fetcher.Form method="get" action="?index" hidden={ loadMore ? true: false}>
                <input type="hidden" name="next_token" value={ranks.NextToken} />
                <button className="px-2 py-1 rounded load-more-button">Load More</button>
            </fetcher.Form>
        </div>
    );
}