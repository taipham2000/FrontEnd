import { BasicSalaryModel } from './BasicSalaryModel';
import { LecturerType } from './LecturerType';

export interface LecturerModel {
  lecturerId: string;
  lecturerTypeId?: string;
  basicSalaryId?: string;
  basicSalaryLevel?: string;
  fesalaryId?: string;
  generalUserInfoId?: string;
  basicSalary?: BasicSalaryModel;
  fesalary?: string;
  generalUserInfo?: string;
  lecturerType?: LecturerType;
}
