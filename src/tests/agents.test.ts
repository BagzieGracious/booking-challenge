import Agent from '../packages/agents/agents.controller';
import { app, request } from './base.tests'

app.get('/agents/:id', Agent.get);
app.get('/agents', Agent.getAll);
app.post('/agents', Agent.create);
app.put('/agents/:id', Agent.update);
app.delete('/agents/:id', Agent.delete);

describe('Agent Controller API Tests', () => {
    let agentId: string;
    let token: string;

    it('should create a new agent', async () => {
        const agentData = {
          name: 'John Doe 2',
          email: 'john@example.com',
          role: 'ADMIN',
        };
    
        const response = await request
          .post('/agents')
          .send(agentData)
          .set('Content-Type', 'application/json');

        agentId = response.body.data.id;
        token = response.body.data.token.token;
    
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('data');
    });

  it('should get an agent by ID', async () => {
    const response = await request
            .get(`/agents/${agentId}`)
            .set('x-agent-id', token);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('should get all agents', async () => {
    const response = await request.get('/agents');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });


  it('should update an agent', async () => {
    const updatedAgentData = {
      name: 'Updated Name',
      email: 'updated@example.com',
      role: 'ADMIN',
    };

    const response = await request
      .put(`/agents/${agentId}`)
      .send(updatedAgentData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('should delete an agent', async () => {
    const response = await request.delete(`/agents/${agentId}`);
    expect(response.status).toBe(200);
  });
});
