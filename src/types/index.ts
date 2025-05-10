export interface ScenarioResult {
    id: string;
    basedOn: string;
    zones: number;
    stations: number;
    poles: number;
}

export interface NavItem {
    label: string;
    active: boolean;
}