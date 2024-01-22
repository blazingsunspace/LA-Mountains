

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
        navigationSlotComponet: "history"
    },
    {
        navigationAnchorId: "team",
        navigationAnchor: "#team",
        navigationLabel: "02. Team",
        navigationSlotComponet: "climb"
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
    tablist: ["MOUNTAIN1", "MOUNTAIN2"],
    tabPanels: [
        {
            image: imageTab1,
            schedule: [
                {
                    date: ["2016-11-25", "2016-11-28"],
                },
                {
                    date: ["2016-12-18"],
                },
                {
                    date: ["2017-01-07"],
                },
            ],
        },
        {
            image: imageTab2,
            schedule: [
                {
                    date: ["2016-11-17"],
                },
                {
                    date: ["2016-12-13", "2016-12-28"],
                },
                {
                    date: ["2017-02-09"],
                },
            ],
        }
    ],
};