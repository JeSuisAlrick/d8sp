export type EntityQueryFilterConditionInput = {
    field: string;
    value: string[],
    operator: "EQUAL" | "NOT_EQUAL" | "SMALLER_THAN" | "SMALLER_THAN_OR_EQUAL" |
    "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "IN" | "NOT_IN" | "LIKE" | "NOT_LIKE" |
    "BETWEEN" | "NOT_BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
    language: string;
}

export type EntityQueryFilterInput = {
    conditions: EntityQueryFilterConditionInput[];
    conjunction: "AND" | "OR";
    groups: EntityQueryFilterInput[];
}

export type Entity = {
    entityId: string;
    entityLabel: string;
    entityUrl: {
      "path": string;
      "routed": boolean;
    }
}

export type EntityQuery  = {
    filter: EntityQueryFilterInput;
}

export type EntityQueryResult  = {
    entities: Entity[];
}

export type MenuQuery  = {
    name: string;
    menuByName: Menu
}

export type MenuLink = {
    label: string;
    links: MenuLink[];
    description: string;
    expanded: boolean;
    
    url: {
        path: string;
        routed: boolean;
    }
}

export type Menu = {
    description: string;
    name: String;
    links: MenuLink[];
}