import { ISPListItem } from "./ISPListItem";
export default class MockClient {
    private static _listItems: ISPListItem[] = 
    [
        { 
            Id: "1",
            Title: "This is our company news" 
        }, 
        { 
            Id: "2", 
            Title: "New SPFx development course will release soon" 
        }, 
        { 
            Id: "3", 
            Title: "Get SPFx course in discounted price" 
        }, 
        { 
            Id: "4", 
            Title: "New course for Site Owners coming soon" 
        }, 
        { 
            Id: "5", 
            Title: "This is another news" 
        },
    ];
    
    public static get(restUrl: string, options?: any)
    : Promise<ISPListItem[]> 
    { 
        return new Promise<ISPListItem[]>((resolve) => 
        { 
            resolve(MockClient._listItems); 
        }); 
    }
}