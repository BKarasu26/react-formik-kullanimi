import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('geçerli bir email giriniz').required('email zorunludur'),
    age: yup.number().positive('yaş negatif olamaz..').integer('tamsayı giriniz').required('zorunlu alan..'),
    password: yup.string().min(5,'minimum 5 karakter olmalı..').matches(passwordRules,{
        message: 'Enaz 1 büyük harf 1 küçük harf ve bir sayı giriniz.'

    }).required('Zorunlu alan...'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Şifreler eşleşmiyor..').required('Zorunlu alan..')
});

export const advancedSchema = yup.object().shape({
    userName: yup.string().min(3,'min.3 karakter olamlı').required('Zorunlu alan..'),
    university: yup.string().oneOf(['bogazici',"itu","marmara","esogu",'universite seçiniz']).required('zorunlu seçim alanı..'),
    isAcceppted: yup.boolean().oneOf([true],'kulanım koşullarınıkabul ediniz.').required('Zorunlu alan...'),
   
});