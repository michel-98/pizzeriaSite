
export class Item {
    Id: number;
    Name: string;
    Description: string;
    MenuCategory: string;
    ItemImageUrl?: any;
    IsFavouriteMenuItem: boolean;
    IsBestPrice: boolean;
    IsSamePrice: boolean;
    OfferUrl: string;
    Price: number;
    IsDisable: boolean;
    CategoryOrderView: number;
}

export class MenuCategory {
    Name: string;
    Count: number;
    MinId: number;
}

export class Menu {
    Items: Item[];
    MenuCategories: MenuCategory[];
}


