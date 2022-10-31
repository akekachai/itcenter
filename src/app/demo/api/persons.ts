interface persons {
  data: Datum[];
  suceess: boolean;
  message: string;
}

interface Datum {
  id: number;
  userid: string;
  displayname: string;
  createdate: string;
  createuserid: number;
  updatedate: string;
  updateuserid: number;
  activeflag: string;
}