import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCards } from '../redux/features/cardSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('fetchCards', () => {
  it('should dispatch the correct actions when fetching cards succeeds', async () => {
    const expectedPayload = { data: [/* mocked card data */] };
    const mockResponse = { json: jest.fn().mockResolvedValue(expectedPayload) };
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const store = mockStore({});
    await store.dispatch(fetchCards());

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('cards/fetchCards/pending');
    expect(actions[1].type).toEqual('cards/fetchCards/fulfilled');
    expect(actions[1].payload).toEqual(expectedPayload.data);

    fetchMock.mockRestore();
  });

  it('should dispatch the correct actions when fetching cards fails', async () => {
    const mockResponse = { json: jest.fn().mockRejectedValue(new Error('Fetch error')) };
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const store = mockStore({});
    await store.dispatch(fetchCards());

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('cards/fetchCards/pending');
    expect(actions[1].type).toEqual('cards/fetchCards/rejected');
    expect(actions[1].error.message).toEqual('Fetch error');

    fetchMock.mockRestore();
  });
});
