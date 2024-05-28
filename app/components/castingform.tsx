'use client'

import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import styles from "@/app/blog/page.module.css";
import {GridLoader} from "react-spinners";
import Alert from "@/app/components/alert";
import axios from "axios";
import {useForm} from "react-hook-form";

const CastingForm = ({handleClose}: {handleClose: any;}) => {
const { register, handleSubmit, reset, formState: { errors } } = useForm();
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [showButton, setShowButton] = useState(true);

  const token = '6835479669:AAGslFIK0rz-d6gvFkpF-cbwtpNSOlYJYqo';
  const chatId = '289631419';

  const removeAlert = () => {
    setSuccess(false);
    setError(false);
  };
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
       setShowButton(false);
      const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: `
          ЗАЯВКА НА ПОДБОР ПЕРСОНАЛА
          Раздел: общая информация
          Дата составления: ${data.date}
          Вакансия конфиденциальная: ${data.confidentialVacancy}
          Полное наименование предприятия: ${data.companyName}
          Раздел: Кто будет проводить собеседования с кандидатами
          Должность: ${data.interviewerPosition}
          ФИО: ${data.interviewerName}
          Контакт: ${data.interviewerContact}
          Раздел: общая информация о должности
          Предполагаемая дата выхода: ${data.estimatedStartDate}
          Подразделение: ${data.department}
          Наименование должности: ${data.positionTitle}
          Административное подчинение: ${data.administrativeSubordination}
          Наличие подчинённых: ${data.subordinates}
          Раздел: Требования к кандидату
          Возраст (предпочтительно): ${data.candidateAge}
          Пол (предпочтительно): ${data.candidateGender}
          Образование: ${data.educationLevel} - ${data.educationDetails}
          Опыт и стаж работы в какой отрасли/секторе предпочтителен (от лет): ${data.experience}
          Владение ПК (какие программы): ${data.computerSkills}
          Дополнительные требования: ${data.additionalRequirements}
          Обязанности и задачи специалиста: ${data.responsibilities}
          Раздел: Условия найма специалиста
          Адрес места работы: ${data.workAddress}
          График работы: ${data.workSchedule}
          Период испытательного срока: ${data.probationPeriod}
          Командировки: ${data.businessTrips}
          Причины появления вакантной должности: ${data.vacancyReason}
          Существует ли данная должность в штатном расписании или это новая должность: ${data.existenceInStaffList}
          Причина появления вакансии: ${data.reasonForVacancy}
        `,
      });

      if (response.data.ok) {
        setSuccess(true);
        reset();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
      setError(true);
    } finally {
      setLoading(false);
      handleClose();
    }
  };
  return (
      <>
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/*<h2>ЗАЯВКА НА ПОДБОР ПЕРСОНАЛА</h2>*/}

      <h5 className="text-center">Раздел: общая информация</h5>
      <Form.Group controlId="formDate">
          <Row className="mb-3">
              <Col lg={4}>
              <Form.Label>Дата составления</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="datetime-local" {...register('date', { required: true })} />
        {errors.date && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formConfidentialVacancy">
          <Row className="mb-3">
              <Col lg={4}>
              <Form.Label>Вакансия конфиденциальная</Form.Label>
              </Col>
              <Col lg={8}>
                  <div>
          <Form.Check inline label="Да" {...register('confidentialVacancy', { required: true })} type="radio" value="Да" />
          <Form.Check inline label="Нет" {...register('confidentialVacancy', { required: true })} type="radio" value="Нет" />
        </div>
        {errors.confidentialVacancy && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formFullCompanyName">
          <Row className="mb-3">
              <Col lg={4}>
              <Form.Label>Полное наименование предприятия</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text" {...register('companyName', { required: true })} />
        {errors.companyName && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>
<hr/>
      <h5 className="text-center">Раздел: Кто будет проводить собеседования с кандидатами</h5>
      <Form.Group controlId="formInterviewerPosition">
          <Row className="py-2">
              <Col lg={3}>
                  <Form.Label>Должность</Form.Label>
              </Col>
              <Col lg={9}>
                  <Form.Control type="text" {...register('interviewerPosition', { required: true })} />
        {errors.interviewerPosition && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formInterviewerName">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>ФИО</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="text" {...register('interviewerName', { required: true })} />
        {errors.interviewerName && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formInterviewerContact">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Контакт</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="tel" {...register('interviewerContact', { required: true })} />
        {errors.interviewerContact && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>
<hr/>
      <h5 className="text-center">Раздел: общая информация о должности</h5>
      <Form.Group controlId="formEstimatedStartDate">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Предполагаемая дата выхода</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="text" {...register('estimatedStartDate', { required: true })} />
        {errors.estimatedStartDate && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formDepartment">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Подразделение</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="text" {...register('department', { required: true })} />
        {errors.department && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formPositionTitle">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Наименование должности</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="text" {...register('positionTitle', { required: true })} />
        {errors.positionTitle && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formAdministrativeSubordination">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Административное подчинение</Form.Label>
              </Col>
              <Col lg={9}>
                  <Form.Control type="text" {...register('administrativeSubordination', { required: true })} />
        {errors.administrativeSubordination && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formSubordinates">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Наличие подчинённых</Form.Label>
              </Col>
              <Col lg={9}>
                  <div>
          <Form.Check inline label="Да" {...register('subordinates', { required: true })} type="radio" value="Да" />
          <Form.Check inline label="Нет" {...register('subordinates', { required: true })} type="radio" value="Нет" />
        </div>
        {errors.subordinates && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>
<hr/>
      <h5 className="text-center">Раздел: Требования к кандидату</h5>
      <Form.Group controlId="formCandidateAge">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Возраст (предпочтительно)</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="text" {...register('candidateAge', { required: true })} />
        {errors.candidateAge && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formCandidateGender">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Пол (предпочтительно)</Form.Label>
              </Col>
              <Col lg={9}>
                  <div>
          <Form.Check inline label="Муж." {...register('candidateGender', { required: true })} type="radio" value="Муж." />
          <Form.Check inline label="Жен." {...register('candidateGender', { required: true })} type="radio" value="Жен." />
        </div>
        {errors.candidateGender && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formEducation">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Образование (предпочтительное)</Form.Label>
              </Col>
              <Col lg={9}>
                  <div>
                      <Form.Check inline label="ВУЗ" {...register('educationLevel', {required: true})} type="radio"
                                  value="ВУЗ"/>
                      <Form.Check inline label="Колледж" {...register('educationLevel', {required: true})} type="radio"
                                  value="Колледж"/>
                  </div>
              </Col>
          </Row>
          <Form.Control type="text" {...register('educationDetails', { required: true })} />
        {errors.educationDetails && <span className="text-danger">Это поле обязательно</span>}
      </Form.Group>

        <Form.Group controlId="formExperience">
            <Row className="py-2">
                <Col lg={4}>
                <Form.Label>Опыт и стаж работы в какой отрасли/секторе предпочтителен (от лет)</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text" {...register('experience', { required: true })} />
        {errors.experience && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formComputerSkills">
          <Row className="py-2">
              <Col lg={4}>
              <Form.Label>Владение ПК (какие программы)</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control type="text" {...register('computerSkills', { required: true })} />
        {errors.computerSkills && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formAdditionalRequirements">
          <Row className="py-2">
              <Col lg={4}>
              <Form.Label>Дополнительные требования</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control as="textarea" rows={3} {...register('additionalRequirements', { required: true })} />
        {errors.additionalRequirements && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formResponsibilities">
          <Row className="py-2">
              <Col lg={4}>
              <Form.Label>Обязанности и задачи специалиста</Form.Label>
              </Col>
              <Col lg={8}>
              <Form.Control as="textarea" rows={3} {...register('responsibilities', { required: true })} />
        {errors.responsibilities && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>
<hr/>
      <h5 className="text-center">Раздел: Условия найма специалиста</h5>
      <Form.Group controlId="formWorkAddress">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Адрес места работы</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="text" {...register('workAddress', { required: true })} />
        {errors.workAddress && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formWorkSchedule">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>График работы</Form.Label>
              </Col>
              <Col lg={9}>
              <Form.Control type="text" {...register('workSchedule', { required: true })} />
        {errors.workSchedule && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formProbationPeriod">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Период испытательного срока</Form.Label>
              </Col>
              <Col lg={9}>
                  <div>
          <Form.Check inline label="3 месяца" {...register('probationPeriod', { required: true })} type="radio" value="3 месяца" />
          <Form.Check inline label="6 месяцев" {...register('probationPeriod', { required: true })} type="radio" value="6 месяцев" />
          <Form.Check inline label="9 месяцев" {...register('probationPeriod', { required: true })} type="radio" value="9 месяцев" />
          <Form.Check inline label="12 месяцев" {...register('probationPeriod', { required: true })} type="radio" value="12 месяцев" />
        </div>
        {errors.probationPeriod && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formBusinessTrips">
          <Row className="py-2">
              <Col lg={3}>
              <Form.Label>Командировки</Form.Label>
              </Col>
              <Col lg={9}>
                  <div>
          <Form.Check inline label="Да" {...register('businessTrips', { required: true })} type="radio" value="Да" />
          <Form.Check inline label="Нет" {...register('businessTrips', { required: true })} type="radio" value="Нет" />
        </div>
        {errors.businessTrips && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formVacancyReason">
          <Row className="py-2">
              <Col lg={5}>
              <Form.Label>Причины появления вакантной должности</Form.Label>
              </Col>
              <Col lg={7}>
              <Form.Control as="textarea" rows={3} {...register('vacancyReason', {required: true })} />
        {errors.vacancyReason && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formExistenceInStaffList">
          <Row className="py-2">
              <Col lg={5}>
              <Form.Label>Существует ли данная должность в штатном расписании или это новая должность</Form.Label>
              </Col>
              <Col lg={7}>
              <Form.Control as="textarea" rows={3} {...register('existenceInStaffList', { required: true })} />
        {errors.existenceInStaffList && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>

      <Form.Group controlId="formReasonForVacancy">
          <Row className="py-2">
              <Col lg={5}>
              <Form.Label>Причина появления вакансии</Form.Label>
              </Col>
              <Col lg={7}>
              <Form.Control as="textarea" rows={3} {...register('reasonForVacancy', { required: true })} />
        {errors.reasonForVacancy && <span className="text-danger">Это поле обязательно</span>}
              </Col>
          </Row>
      </Form.Group>
        {showButton && (
          <Button className={`${styles.hoverBG} btn px-4 w-100`} type="submit">
            Отправить
          </Button>
        )}
        {loading && (
          <div className="d-flex justify-content-center">
            {/*<PulseLoader size={15} color={`#FFC803`} speedMultiplier={0.5} />*/}
            <GridLoader size={15} color={`#FFC803`} speedMultiplier={0.5} />

            </div>
          )}
        {/*{success && <Alert variant="success">Заявка успешно отправлена</Alert>}*/}
      {/*{error && <Alert variant="danger">Ошибка при отправке заявки</Alert>}*/}
      {/*<Button className={`${styles.hoverBG} btn-block`} type="submit">Отправить</Button>*/}
      {success && <Alert bgColor={'success'} icon={'✅ '} status="Отправлено!" message="Ваше сообщение отправлено 😊" onClick={removeAlert} />}
      {error && <Alert bgColor={'danger'} icon={'❌ '} status="Ошибка!" message="Что-то пошло не так. Пожалуйста попробуйте позже 😢" onClick={removeAlert} />}
    </Form>
      </>
  );
};

export default CastingForm;
