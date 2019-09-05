import faker from 'faker/locale/ko'
import fakerEn from 'faker/locale/en'

import {filter, find, range} from 'fxjs/Strict'

const random = faker.random
const classCount = 50
const teacherCount = 30
const reviewCount = 500
const userCount = 100
const gradeRange = [1, 2, 3, 4]
const ranges = {
  short: { min: 2, max: 4 },
  normal: { min: 4, max: 8 },
  long: { min: 4, max: 12 }
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
    personal.start = random.number(3)
    personal.end = random.number({min: personal.start, max: 12})
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
      schedule: [...genSchedule(random.number(ranges.long))],
      book: {
        type: faker.lorem.word(),
        desc: faker.lorem.sentences()
      },
      methods: [...genLorem(random.number(ranges.normal), faker.lorem.sentence)],
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
      reivew: faker.lorem.sentence(),
    }
  }
}

function * genTeachers (num) {
  for (let i = 0; i < num; i++) {
    yield {
      id: getTeacherId(i),
      name: `${faker.name.lastName()}${faker.name.firstName()}`,
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

const classes = [...genClasses(classCount)]
const teachers = [...genTeachers(teacherCount)]
const reviews = [...genReviews(reviewCount)]
const users = [...genUsers(userCount)]

export function getClassInfoPageData (classId) {
  const classInfo = find(classInfo => classInfo.id === getClassId(classId), classes)
  const teacherInfo = find(teacherInfo => teacherInfo.id === classInfo.teacherId, teachers)
  const classReviews = filter(review => review.classId === classInfo.id, reviews)

  return {
    heading: '수업 정보',
    classSummary: {
      teacherName: teacherInfo.name,

    },
    classInfo: {
      heading: '수업 소개',
      sections: classInfo,
    },
    teacherInfo: {
      heading: '튜터 소개',
      sections: teacherInfo,
    },
    reviews: {
      heading: '수업 후기',
      sections: classReviews
    },
    footer: {
      buttons: [
        {
          label: '수업구매하기',
          url: fakerEn.internet.url()
        },
        {
          label: '수업권으로 수업 예약',
          url: fakerEn.internet.url()
        }
      ]
    }
  }
}

