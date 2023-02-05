import { LecturerModel } from '../../basic/LecturerModel';
import { LecturerPositionModel } from '../../basic/LecturerPositionModel';
import { LecturerType } from '../../basic/LecturerType';
import { RoleModel } from '../../basic/RoleModel';
import { LecDepResponseModel } from './LecDepResponseModel';

export interface LecturerModelResponse {
  generalUserInfoId: string | any;
  fullName?: string | any;
  userName?: string | any;
  password?: string | any;
  gmail?: string | any;
  phoneNumber?: string | any;
  nationalId?: string | any;
  imageUrl?: string | any;
  dateOfBirth?: string | any;
  gender?: string | any;
  numDependant?: number;
  isDisable?: boolean;
  address?: string | any;
  roleId?: string | any;
  role?: RoleModel;
  lecture?: LecturerModel;
  lecturer?: LecturerModel | any;
  // deparment?: LecDepResponseModel | any;
  // lecturerPosition?: LecturerPositionModel;

  //-------- get data combobox--------
  lecturerTypeId?: string | any;
  department?: LecDepResponseModel | any;
  departmentId?: string;
  fesalaryId?: string;
  basicSalaryId?: string;
}
