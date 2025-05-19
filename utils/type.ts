export interface ResponseInfo {
  alias: string;
  stationId: number;
  updated: number;
  trackId: string;
  title: string;
  citatisId: number;
  iName?: string;
  iArtist?: string;
  iImg?: string;
}

export type PlayerProps = {
  setInfo: React.Dispatch<React.SetStateAction<ResponseInfo | undefined>>

}