import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useEffect, useState } from 'react'
import { LoaderFunction, json } from '@remix-run/node';
import { useFetcher, useLoaderData } from "@remix-run/react";

import Team from "~/interfaces/Team"

import CardRankGrid from "~/components/card-rank-grid";
import CardFilterGrid from "~/components/card-filter-grid";
import PagedRanks from "~/interfaces/PagedRanks";
import TeamRank from "~/interfaces/TeamRank";

type LoaderData = {
    teams: Team[];
    pagedRanks: PagedRanks;
}

export const loader: LoaderFunction = async (remixContext) => {
    var teamUrl = "https://4bbf91rzf7.execute-api.us-east-1.amazonaws.com/prod/teams";
    let apiUrl = "https://4bbf91rzf7.execute-api.us-east-1.amazonaws.com/prod/global_rankings";

    // Get params
    const url = new URL(remixContext.request.url);
    const nextToken = url.searchParams.get("next_token") || "";
    const teamIds = url.searchParams.get("team_ids") || "";
    if (nextToken) {
        apiUrl = apiUrl + `?next_token=${nextToken}`;
    }
    if (teamIds) {
        apiUrl = `https://4bbf91rzf7.execute-api.us-east-1.amazonaws.com/prod/team_rankings?team_ids=${teamIds}`
    }

    const teams = await fetch(teamUrl);
    const ranks = await fetch(apiUrl);
    // return await ranks.json();
    return {
        teams: await teams.json(),
        pagedRanks: await ranks.json()
    }
}

export default function WorldRankingTeamsRoute() {
    const fetcher = useFetcher();
    const loaderData = useLoaderData<LoaderData | undefined>();
    const [searchResult, setSearchResult] = useState<string[]>([]);
    const initialLoadMore = !(loaderData.pagedRanks.NextToken 
        && loaderData.pagedRanks.NextToken.length > 0)
    const [loadMoreHide, setLoadMoreHide] = useState(initialLoadMore);

    const [filteredTeams, setFilteredTeams] = useState<TeamRank[]>(loaderData.pagedRanks.Items);

    const handleChange = (e: string[]) => {
        setSearchResult(e)
    }

    // let filteredTeams = loaderData.pagedRanks.Items as TeamRank[]

    useEffect(() => {
        if (searchResult.length > 0) {
            let result = filteredTeams.filter((item) => {
                return searchResult.includes(item.Name)
            })

            setFilteredTeams(result)
            setLoadMoreHide(true);
        }else{ 
            setFilteredTeams(loaderData.pagedRanks.Items)
            setLoadMoreHide(initialLoadMore)
        }

    }, [searchResult])

    useEffect(() => {
        if (fetcher.data ) {
            let data = fetcher.data as LoaderData;
            setFilteredTeams([...filteredTeams, ...data.pagedRanks.Items])

            setLoadMoreHide(!(data.pagedRanks.NextToken && data.pagedRanks.NextToken.length > 0))
        }
    }, [fetcher.data])

    return (
        <Container>
            <Row>
                <Col>
                    <CardFilterGrid
                        filterItems={loaderData.teams}
                        onSelect={handleChange} />
                </Col>
                <Col>
                    {filteredTeams
                        ? <CardRankGrid
                            ranks={filteredTeams} />
                        : ""
                    }
                    <fetcher.Form method="get" action="?index" hidden={loadMoreHide}>
                        <input type="hidden" name="next_token" value={loaderData.pagedRanks.NextToken} />
                        <button className="px-2 py-1 rounded load-more-button">Load More</button>
                    </fetcher.Form>
                </Col>
            </Row>
        </Container>
    )
}