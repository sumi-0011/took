import {firebase} from '@react-native-firebase/firestore';
import {TrashCanType, TrashCanInfoType} from 'types/TrashCanType';
import {getUserInfo} from './fireAuthAPI';

const trashCans = firebase.firestore().collection('trashCans');
const users = firebase.firestore().collection('users');
const {uid} = getUserInfo();

export async function addTrashCan(addData: TrashCanInfoType) {
  try {
    const res = await trashCans.add(addData);

    return res;
  } catch (error) {
    console.log(error);
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
    console.log('error: ', error);
  }
}

export async function getStaredTrashCans() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();

    const stars: string[] = userData?.stars;
    const staredTrashCans: TrashCanInfoType[] = [];

    for (const staredItemId of stars) {
      const trashCanDoc = await trashCans.doc(staredItemId).get();
      const trashCanData = trashCanDoc.data();
      staredTrashCans.push({
        ...trashCanData,
        id: staredItemId,
      } as TrashCanInfoType);
    }
    return staredTrashCans;
  } catch (error) {
    console.log(error);
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
      });
    });
  } catch (error) {
    console.log('getTrashCans api error: ', error);
  }
  return trashCanList;
}

export async function getRegisterTrashCans() {
  const registedTrashCans: TrashCanInfoType[] = [];
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const registed = userData?.registedTrashCans;

    for (const registedItemId of registed) {
      const trashCanDoc = await trashCans.doc(registedItemId).get();
      const trashCanData = trashCanDoc.data();
      registedTrashCans.push({
        ...trashCanData,
        id: registedItemId,
      } as TrashCanInfoType);
    }
    return registedTrashCans;
  } catch (error) {
    console.log('getRegisterTrashCans api error: ', error);
  }
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
