interface Photos {
    [key: number]: {
        albumId: number;
        id: number;
        thumbnailUrl: string;
        title: string;
        url: string;
    }[];
}

export {Photos};
