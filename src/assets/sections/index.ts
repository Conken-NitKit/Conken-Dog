interface IContent {
    title: string;
    link: string;
    mediaType: ("READ_ONLY" | "USE_SOUND" | "USE_MY_PC" | "USE_GIT")[];
    requiredTime: number;
}

export interface ISection {
    title: string;
    description: string;
    contentsList: IContent[];
}