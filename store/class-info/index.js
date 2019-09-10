import faker from 'faker/locale/ko'
import fakerEn from 'faker/locale/en'

import { filter, find, range } from 'fxjs/Strict'

const random = faker.random
const classCount = 50
const teacherCount = 30
const reviewCount = 500
const userCount = 100
const gradeRange = [1, 2, 3, 4]
const randomRange = {
  small: { min: 1, max: 4 },
  middle: { min: 4, max: 8 },
  big: { min: 4, max: 12 }
}

const genId = (prefix, id) => id => `${prefix}${id}`
const getTeacherId = id => genId('teacher')(id)
const getClassId = id => genId('class')(id)
const getReviewId = id => genId('review')(id)
const getUserId = id => genId('user')(id)
const subjects = [
  {
    id: 1,
    name: '국어'
  },
  {
    id: 2,
    name: '수학'
  },
  {
    id: 3,
    name: '사회/과학'
  },
]

function * genSentences (num) {
  for (let i = 0; i < num; i++) {
    yield faker.lorem.sentence()
  }
}

function * genLorem (num, genLorem) {
  for (let i = 0; i < num; i++) {
    yield genLorem()
  }
}

function * genUsers (num) {
  for (let i = 0; i < num; i++) {
    yield {
      id: getUserId(i),
      name: `${faker.name.lastName()}${faker.name.firstName()}`,
      avataUrl: faker.image.imageUrl(),
    }
  }
}

function * genClasses (num) {
  for (let i = 0; i < num; i++) {
    const targetGrade = random.arrayElement(gradeRange)
    const targetSubject = random.arrayElement(subjects).name
    const personal = {}
    personal.start = random.number(randomRange.small)
    personal.end = random.number(randomRange.big)
    const recuritment = {
      personal,
      period: {
        start: faker.date.past(),
        end: faker.date.future(),
      }
    }

    function * genSchedule (num) {
      for (let i = 0; i < num; i++) {
        let period = {}
        period.start = faker.date.future(1, recuritment.period.end)
        period.end = faker.date.future(1, period.start)
        yield period
      }
    }

    yield {
      id: getClassId(i),
      teacherId: getTeacherId(random.number(teacherCount)),
      targetSubject,
      targetGrade,
      recuritment,
      schedule: [...genSchedule(random.number(randomRange.big))],
      book: {
        type: faker.lorem.word(),
        desc: faker.lorem.sentences()
      },
      methods: [...genLorem(random.number(randomRange.middle), faker.lorem.sentence)],
      // method: [...genSentences(random.number({min:3, max: 6}))],
      price: random.arrayElement(range(50000, 100000, 5000))
    }
  }
}

function * genReviews (num) {
  for (let i = 0; i < num; i++) {
    yield {
      id: getReviewId(i),
      classId: getClassId(random.number(classCount)),
      userId: getUserId(random.number(userCount)),
      classRanking: random.arrayElement(range(1, 5, 0.5)),
      review: faker.lorem.sentence(),
    }
  }
}

function * genTeachers (num) {
  for (let i = 0; i < num; i++) {
    yield {
      id: getTeacherId(i),
      name: `${faker.name.lastName()}${faker.name.firstName()}`,
      imgSrc: require('@/assets/img/teachers/pic.png'),
      organization: fakerEn.company.companyName(),
      course: fakerEn.lorem.word(),
      target: fakerEn.name.jobType(),
      education: fakerEn.lorem.word(),
      introduction: {
        short: faker.lorem.lines(),
        pr: [...genLorem(random.number({ min: 3, max: 7 }), faker.lorem.sentence)],
        aspiration: [...genLorem(random.number({ min: 2, max: 4 }), faker.lorem.paragraph)],
        profiles: [...genLorem(random.number({ min: 3, max: 7 }), faker.lorem.sentence)]
      }
    }
  }
}

export const classes = [...genClasses(classCount)]
export const teachers = [...genTeachers(teacherCount)]
export const reviews = [...genReviews(reviewCount)]
export const users = [...genUsers(userCount)]

export function getClasses (classId) {
  const theClass = find(classInfo => classInfo.id === getClassId(classId), classes)
  const theTeacher = find(teacherInfo => teacherInfo.id === theClass.teacherId, teachers)
  const theReviews = filter(review => review.classId === theClass.id, reviews)
  /*
  teacherImageSrc: require('@/assets/img/teachers/pic.png'),
        teacherName: theTeacher.name,
        classTargetGrade: theClass.targetGrade,
        classTargetSubject: theClass.targetSubject,
        classTime: theClass.schedule[0].stjkjjart,
   */
  return {
    heading: '수업 신청',
    theTeacher,
    theClass,
    theReviews,
    footer: {
      restDate: random.number(randomRange.big),
      restSeat: random.number(randomRange.small),
      classAccount: theClass.schedule.length,
      classPrice: theClass.price,
      buttons: [
        {
          label: `수업구매하기(${theClass.price}원)`,
          url: fakerEn.internet.url(),
          active: true,
        },
        {
          label: '수업권으로 수업 예약',
          url: fakerEn.internet.url(),
          active: true,
        },
        {
          label: '커넥츠 멤버십으로 예약',
          url: fakerEn.internet.url(),
          active: true,
        },
        {
          label: '일간대치동 수학 교재 구매하기',
          url: fakerEn.internet.url(),
          active: false
        }
      ]
    }
  }
}

