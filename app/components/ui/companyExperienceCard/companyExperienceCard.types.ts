
export interface Skill {
    id: string;
    label: string;
}

export interface Result {
    id: string;
    label: string;
    link?: string;
}
export interface Time {
    label: string;
    from: string;
    to: string;
}

export interface CompanyExperience {
    id: string;
    company: string;
    time: Time;
    skills: {
        label: string;
        list: Skill[];
    };
    results?: {
        label: string;
        list: Result[];
    };
    background: string;
}

export interface CompanyExperienceCardProps extends  CompanyExperience {}