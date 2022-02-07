import { GoogleApis, google } from 'googleapis';
import { getAPI } from 'googleapis-common';

export type Content = {
  title: string
  content: string
}

const getSheets = () => {
  const googleapis = new GoogleApis();
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new googleapis.auth.JWT(
    process.env.GCP_SERVICEACCOUNT_EMAIL,
    undefined,
    (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes
  );
  return google.sheets({ version: 'v4', auth: jwt });
};

export const getContents = async (): Promise<Content[]> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'contents',
  });
  const rows = response.data.values;
  if (rows) {
    return rows.slice(1).map((row): Content => {
      return {
        title: row[0],
        content: row[1]
      };
    });
  }
  return [];
};

export const appendRow = async (): Promise<void> => {
  const sheets = getSheets();
  const body = {};
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    insertDataOption: 'INSERT_ROWS',
    requestBody: body, 
  })

  console.log(`${response}}`)

  return;
}
