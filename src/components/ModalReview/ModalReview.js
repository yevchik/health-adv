import React, { useEffect, useState } from 'react'
import css from './ModalReview.module.scss'
import classnames from 'classnames'
import { images } from 'index'
import { useForm, Controller } from 'react-hook-form'
import Heading from 'components/Heading/Heading'
import IconLock from 'assets/icons/IconLock'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import { servicesList } from 'components/ModalReview/_server/servicesList'
import { doctorsList } from 'components/ModalReview/_server/doctorsList'
import Select from 'components/Select/Select'

const ModalReview = ({
  isWithImage = true
}) => {
  const { register, control, handleSubmit, errors } = useForm()
  const [options, updateOptions] = useState({
    services: [],
    doctors: []
  })
  const onSubmit = data => console.log(data)

  useEffect(() => {
    updateOptions(() => {
      const services = servicesList.map(item => ({
        label: item,
        value: item
      }))
      const doctors = doctorsList.map(item => ({
        label: item,
        value: item
      }))
      return {
        services,
        doctors
      }
    })
  }, [updateOptions])

  const { services, doctors } = options

  return (
    <div className={classnames(css.wrapper, { [css.wrapperIllustrated]: isWithImage })}>
      {isWithImage &&
        <img className={css.image} src={images('./modal__review@desktop.jpg')} alt='Форма для составления отзыва' />
      }
      <div className={css.content}>
        <Heading content='Оставить отзыв' />
        <p className={css.descriptor}>
          Оставьте отзыв о клинике или конкретном враче. Мы опубликуем его после проверки.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.form}>
            <fieldset className={css.fieldset}>
              <Input
                name='modal-review-name'
                placeholder='ФИО*'
                registration={register({ required: true, minLength: 3, pattern: /^[а-яА-Я]+$/ })}
                inputPalette='light'
              />
              {errors['modal-review-name'] &&
                <p className={css.error}>
                  Пожалуйста, введите имя, состоящее не менее, чем из трех букв
                </p>
              }
            </fieldset>
            <fieldset className={css.fieldset}>
              <Controller
                name='modal-review-services'
                as={Select}
                control={control}
                options={services}
                rules={{ required: true }}
                placeholder='Услуга*'
              />
              {errors['modal-review-services'] &&
              <p className={css.error}>
                Пожалуйста, выберите услугу, по которой Вы хотели бы оставить свой отзыв
              </p>
              }
            </fieldset>
            <fieldset className={css.fieldset}>
              <Input
                name='modal-review-email'
                placeholder='E-mail*'
                registration={register({ minLength: 7, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                inputPalette='light'
              />
              {errors['modal-review-email'] &&
              <p className={css.error}>
                Пожалуйста, убедитесь, что введенный адрес электронной почты является корректным и содержит не менее 7 символов
              </p>
              }
            </fieldset>
            <fieldset className={css.fieldset}>
              <Controller
                name='modal-review-doctor'
                as={Select}
                control={control}
                options={doctors}
                rules={{ required: true }}
                placeholder='Врач*'
              />
              {errors['modal-review-doctor'] &&
              <p className={css.error}>
                Пожалуйста, выберите врача, о котором Вы хотели бы оставить свой отзыв
              </p>
              }
            </fieldset>
            <fieldset className={classnames(css.fieldset, css.fieldsetFull)}>
              <Input
                name='modal-review-text'
                placeholder='Напишите отзыв о враче, клинике или об услуге...'
                registration={register({ required: true, minLength: 10 })}
                inputPalette='light'
                fieldType='textarea'
              />
              {errors['modal-review-text'] &&
              <p className={css.error}>
                Пожалуйста, введите текст отзыва не короче 10 символов
              </p>
              }
            </fieldset>
            <Button
              className={css.button}
              label='Записаться'
              btnStyle='decorated'
              handleClick={() => {}}
              type='submit'
            />
            <p className={css.acceptance}>
              <IconLock className={css.icon} />
              <span>
                Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с политикой конфиденциальности ознакомлен
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalReview
