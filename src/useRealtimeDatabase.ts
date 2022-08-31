import { realtimeDatabase } from '@/plugins/realtimeDatabase';
import { ref as fBRef, onValue, update } from 'firebase/database';
import { type Ref, ref, watch } from 'vue';
import isEqual from 'lodash/isEqual';
import type { DataSnapshot } from 'firebase/database';

export function useRealtimeDatabase <Type extends Record<string, unknown>> (path: string, defaultValue: Type) {
  const pathReference = fBRef(realtimeDatabase, path);
  let firebaseData = {};
  const data = ref(defaultValue) as Ref<Type>;

  onValue(pathReference, (snapshot: DataSnapshot) => {
    if(!snapshot.val()) return;

    firebaseData = snapshot.val();
    data.value = snapshot.val();
  });

  function updateData(data: Type) {
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

