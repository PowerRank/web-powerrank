import { json, LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import CardRankGrid from "~/components/card-rank-grid";
import PagedRanks from "~/interfaces/PagedRanks";

export const meta: MetaFunction = () => {
  return [
    { title: "PowerRank" },
    { name: "description", content: "Welcome to PowerRank!" },
  ];
};

export const loader: LoaderFunction = async () => {
  // let url = window.ENV.API_URL + "/global_rankings?number_of_teams=10";
  // console.log("API URL: " + url)
  const ranks = await fetch("https://4bbf91rzf7.execute-api.us-east-1.amazonaws.com/prod/global_rankings?number_of_teams=10");
  return await ranks.json();
}

export default function Index() {
  const loaderData = useLoaderData<PagedRanks | undefined>();
  return (
    <Container className="p-5">
      <Row>
        <div className="pb-3 container-title">
          WORLD RANKING
        </div>
      </Row>
      <Row>
        <CardRankGrid
          ranks={loaderData?.Items} />
      </Row>
      <Row>
        <p className="d-flex justify-content-end">
          <a
            className="see-more-link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="/world-ranking"
          >
            SEE MORE {">"}
          </a>
        </p>
      </Row>
    </Container>
  );
}
