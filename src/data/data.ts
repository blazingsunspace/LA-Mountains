

import imageTab1 from "../assets/images/300419569_5294254910628330_7525469916920788317_n.jpg";
import imageTab2 from "../assets/images/photo-1414449381078-c7768b8f19b8.jpg";


export type NavigationObjectType = {
    navigationAnchor: string;
    navigationLabel: string;
    navigationAnchorId: string;
    navigationSlotComponet: string;
};

export const navigationObject: NavigationObjectType[] = [
    {
        navigationAnchorId: "history",
        navigationAnchor: "#history",
        navigationLabel: "01. History",
        navigationSlotComponet: "../History/History"
    },
    {
        navigationAnchorId: "team",
        navigationAnchor: "#team",
        navigationLabel: "02. Team",
        navigationSlotComponet: "../Climb/Climb"
    },
];

type SchedyleArrayType = {
    date: string[];
};
type TabPanelsType = {
    image: string;
    schedule: SchedyleArrayType[];
};

export type TabItemsType = {
    tabItems: TabsType;
};

export type TabsType = {
    tablist: string[];
    tabPanels: TabPanelsType[];
};


export const tabsContent: TabsType = {
    tablist: ["MOUNTAIN1", "MOUNTAIN2", "MOUNTAIN3"],
    tabPanels: [
        {
            image: imageTab1,
            schedule: [
                {
                    date: ["2020-01-01", "2020-01-02"],
                },
                {
                    date: ["2020-02-01", "2020-02-02"],
                },
                {
                    date: ["2020-03-01"],
                },
            ],
        },
        {
            image: imageTab2,
            schedule: [
                {
                    date: ["2020-01-11", "2020-01-02"],
                },
                {
                    date: ["2020-02-11", "2020-02-12"],
                },
                {
                    date: ["2020-03-11"],
                },
            ],
        },
        {
            image: imageTab2,
            schedule: [
                {
                    date: ["2021-01-11", "2020-01-02"],
                },
                {
                    date: ["2021-02-11", "2020-02-12"],
                },
                {
                    date: ["2021-03-11"],
                },
            ],
        },
    ],
};