import {firebase} from '@react-native-firebase/firestore';
import {TrashCanType, TrashCanInfoType} from 'types/TrashCanType';
import {getUserInfo} from './fireAuthAPI';

const trashCans = firebase.firestore().collection('trashCans');

const {uid} = getUserInfo();

export async function addTrashCan(addData: TrashCanInfoType) {
  try {
    const res = await trashCans.add(addData);

    return res;
  } catch (error) {
    console.warn(error);
  }
}

export async function getTrashCan(TCId: string) {
  try {
    let result;
    const res = await trashCans.get();
    // TODO : doc.id로 바로 찾을수 있을텐데? 밑처럼 하면 될거같은데 테스트를 못함
    // await trashCans.doc(TCId).get()
    res.forEach(function (doc) {
      if (TCId === doc.id) {
        const trashCanData = doc.data();
        result = {...trashCanData, id: TCId};
      }
    });

    return result;
  } catch (error) {
    console.warn('error: ', error);
  }
}

export async function getTrashCans() {
  const trashCanList: TrashCanType[] = [];
  try {
    const res = await trashCans.get();
    res.forEach(function (doc) {
      const trashCanData = doc.data();
      trashCanList.push({
        id: doc.id,
        name: trashCanData.name,
        tags: trashCanData.tags,
        coordinate: trashCanData.coordinate,
        trashImage: trashCanData.trashImage,
        reportUsers: trashCanData.reportUsers ?? [],
        isFull: false,
        fullDegree: 0,
      });
    });
  } catch (error) {
    console.warn('getTrashCans api error: ', error);
  }
  return trashCanList;
}

export async function updateTrashCanReportUser(TCId: string) {
  if (!uid) {
    console.log('로그인이 필요합니다.');
    return;
  }
  try {
    const TrashCanDoc = await trashCans.doc(TCId).get();
    const TrashCanData: TrashCanType = TrashCanDoc.data() as TrashCanType;
    const TrashCanReportUser = TrashCanData?.reportUsers ?? [];
    if (TrashCanReportUser.includes(uid)) {
      console.log('이미 신고한 유저입니다. ');
      return false;
    } else {
      const res = await trashCans.doc(TCId).update({
        reportUsers: [...TrashCanReportUser, uid],
      });
      return res;
    }
  } catch (error) {
    console.warn('error: ', error);
  }
}

export async function updateTrashCanFull(TCId: string, input: number) {
  try {
    const TrashCanDoc = await trashCans.doc(TCId).get();
    const TrashCanData: TrashCanType = TrashCanDoc.data() as TrashCanType;

    // NOTE : 기본값이 잘 들어가지 않은 이전 데이터가 있어 분기 처리
    if (TrashCanData?.fullDegree === undefined) {
      trashCans.doc(TCId).update({
        fullDegree: input,
      });
    } else {
      const prevFullDegree = TrashCanData.fullDegree;
      const calc = Math.round((prevFullDegree + input) / 2);
      trashCans.doc(TCId).update({
        fullDegree: calc,
      });
    }
  } catch (error) {
    console.warn('error: ', error);
  }
}
