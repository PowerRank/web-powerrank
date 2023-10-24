import TeamRank from "~/interfaces/TeamRank"
export default interface PagedRanks {
    Items: TeamRank[],
    NextToken?: string
}