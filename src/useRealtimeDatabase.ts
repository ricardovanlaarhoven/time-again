import { realtimeDatabase } from '@/plugins/realtimeDatabase';
import { ref as fBRef, onValue, update } from 'firebase/database';
import { computed, ref, watch } from 'vue';
import isEqual from 'lodash/isEqual';
import { DataSnapshot } from 'firebase/database';

export function useRealtimeDatabase(path: string) {
  const pathReference = fBRef(realtimeDatabase, path);
  let firebaseData = {};
  const data = ref({values:[]});

  onValue(pathReference, (snapshot: DataSnapshot) => {
    firebaseData = snapshot.val();
    data.value = snapshot.val();
  });

  function updateData(data: any) {
    update(pathReference, data);
  }

  watch(data, (value) => {
    if(isEqual(value, firebaseData)) {
      return;
    }
    updateData(value)
  }, {deep: true});

  return {data};
}

