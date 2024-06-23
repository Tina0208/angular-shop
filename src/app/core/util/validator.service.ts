import { AbstractControl, ValidatorFn } from "@angular/forms";

/**
 * 必填
 * @param control
 * @returns
 */
export function required(): ValidatorFn {
  return (c: AbstractControl) => {
    const content = c.value?.trim();
    const invalid = !content;
    return invalid ? { errorMessage: '必填欄位' } : null;
  }
}

/**
 * 驗證email格式
 * @param control
 * @returns
 */
export function validateEmail(): ValidatorFn {
  return (c: AbstractControl) => {
    const content = c.value?.trim();
    const reg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const invalidEmail = content && !reg.test(content);
    return invalidEmail ? { errorMessage: '請輸入正確email格式' } : null;
  }
}

/**
 * 驗證電話號碼10碼
 * @param control
 * @returns
 */
export function validatePhoneNumber(): ValidatorFn {
  return (c: AbstractControl) => {
    const content = c.value?.trim();
    const reg = /^\d{10}$/;
    const invalidPhone = content && !reg.test(content);
    return invalidPhone ? { errorMessage: '請輸入電話號碼10碼' } : null;
  }
}
