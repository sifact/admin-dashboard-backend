import OverallStat from "./sales.model";

export const getSalesFormDB = async () => {
    const overallStats = await OverallStat.find();

    if (!overallStats) throw new Error("not found");
    return overallStats[0];
};
