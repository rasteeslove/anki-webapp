/*\
This file is for the global types that are used across the app.

NOTE: might need to remove unnecessary details from UserType.
\*/

export type UserType = {
    id: number,
    password: string,
    last_login: string,
    is_superuser: boolean,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    is_staff: boolean,
    is_active: boolean,
    date_joined: string,
    groups: Array<string>,
    user_permissions: Array<string>,
};

export * from './errors';
export * from './apiTypes';
