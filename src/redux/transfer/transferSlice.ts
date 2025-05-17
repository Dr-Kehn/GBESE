import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface TransferPayload {
  userId: string;
  recipientId: string;
  amount: number;
  transactionType: string;
}

interface TransferState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: TransferState = {
  loading: false,
  success: false,
  error: null,
};

export const sendTransfer = createAsyncThunk(
  'transfer/send',
  async (payload: TransferPayload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://gbese-app.onrender.com/api/v1/transactions/transfer',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Something went wrong');
    }
  }
);

const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    resetTransferState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendTransfer.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendTransfer.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetTransferState } = transferSlice.actions;
export default transferSlice.reducer;
