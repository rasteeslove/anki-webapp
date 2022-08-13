/*\
This file is for the global types that are used across the app.

NOTE: might need to remove unnecessary details from UserType.
\*/

export type UserType = {
    id: number,
    last_login: string,
    username: string,
    email: string,
    date_joined: string,
};

export * from './errors';
export * from './apiTypes';
