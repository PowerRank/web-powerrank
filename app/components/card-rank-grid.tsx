import CardRank from "~/components/card-rank"
import TeamRank from "~/interfaces/TeamRank"

interface CardRanks {
    ranks: TeamRank[]
}

export default function CardRankGrind(props: CardRanks) {
    return props.ranks.map(item => {
        return (
            <CardRank {...item} />
        )
    })
};